import { getCheese } from '@/api/requests/cards';
import { makeAutoObservable } from 'mobx';

class Cards {
  cards = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCards() {
    this.isLoading = true;
    try {
      const res = await getCheese();
      this.cards = res.data;
    } catch (e) {
      console.log(e);
    } finally {
      this.isLoading = false;
    }
  }
}

export default new Cards();
