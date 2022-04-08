class ServiceGateway {
  constructor() {
    this.baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
    this.uniqueDbKey = 'xgFXbgiOg2eVI4gsgjOJ';
  }

    add = async (_id, _name, _category, _author) => {
      const data = await fetch(`${this.baseUrl}${this.uniqueDbKey}/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: _id, title: _name, category: _category, author: _author,
        }),
      });
      return data;
    }

      remove = async (_id) => {
        const data = await fetch(`${this.baseUrl}${this.uniqueDbKey}/books/${_id}`, { method: 'DELETE' });
        return data;
      }

      fetch = async () => {
        const data = await fetch(`${this.baseUrl}${this.uniqueDbKey}/books`);
        return data;
      }
}

export default ServiceGateway;
