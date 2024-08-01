//Implement a simple HashMap class with put, get, and remove methods.

class HashMap {
    constructor(size = 10) {
        this.size = size;
        this.buckets = Array(this.size).fill(null).map(() => []);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    put(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const existingIndex = bucket.findIndex(([k]) => k === key);
        
        if (existingIndex !== -1) {
           
            bucket[existingIndex][1] = value;
        } else {
            
            bucket.push([key, value]);
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const pair = bucket.find(([k]) => k === key);
        
        return pair ? pair[1] : undefined;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const existingIndex = bucket.findIndex(([k]) => k === key);
        
        if (existingIndex !== -1) {
            bucket.splice(existingIndex, 1);
        }
    }
}

const map = new HashMap();

map.put('name', 'Ishita');
console.log(map.get('name')); 

map.put('name', 'Rohit');
console.log(map.get('name')); 

map.remove('name');
console.log(map.get('name'));