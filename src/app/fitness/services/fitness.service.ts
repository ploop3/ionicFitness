import { Injectable, signal, inject, computed } from '@angular/core';
import { Database, ref, query, onValue } from '@angular/fire/database';
import { Storage as IStorage } from '@ionic/storage-angular';

import { Day } from '../interfaces/training.interface';

@Injectable({
  providedIn: 'root',
})
export class FitnessService {
  private database: Database = inject(Database);
  private _ionStorage: IStorage | null = null;

  //Array of 48 elements/days
  private _cacheStore = signal<Day[] | null>(null);
  public cacheStoreOnline = computed((): Day[] | null => {
    return this._cacheStore();
  });

  constructor(private ionicStorage: IStorage) {
    this._ionStorage = this.ionicStorage;
    this.getDBdata();
  }

  async getDBdata() {
    try {
      const dbData = await this._ionStorage?.get('training');
      // const dbData = await this._ionStorage?.clear();
      if (dbData) {
        this._cacheStore.set(dbData);
      } else {
        //Get the data from firebase
        let snapshot = await this.getFirebaseDB();
        snapshot = Object.values(snapshot);
        this._cacheStore.set(snapshot);
        await this._ionStorage?.set('training', snapshot);
      }
    } catch (error) {}
  }

  getFirebaseDB(): Promise<any> {
    const dbRef = ref(this.database, '/training');
    const qry = query(dbRef);
    return new Promise(function (resolve, reject) {
      onValue(
        qry,
        (snapshot) => {
          resolve(snapshot.val());
        },
        {
          onlyOnce: true,
        }
      );
    });
  }

  getDay(dayNumber: number) {
    //dayNumber accepted: 1 to 48
    if (dayNumber > this._cacheStore()!.length || dayNumber < 1) {
      throw new Error('Day number not valid');
    }
    return this._cacheStore()![dayNumber - 1];
  }
}
