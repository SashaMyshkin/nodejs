import * as fs from 'fs';

import dbObject from './types/dbObject';

class Database<T extends dbObject> {

    private data: T[];
    private tableName:string;

    constructor(tableName:string){
        this.tableName = tableName;
        this.data = JSON.parse(fs.readFileSync(`./src/data/${tableName}.json`, 'utf-8')) as T[];
    }

    select(id:number):(T | undefined){
        return  this.data.find(elem=> elem.id === id);
    }

    selectAll():T[]{
        return this.data;
    }

    update(data:T):T | undefined{
        const index = this.data.findIndex(elem=>elem.id === data.id);

        if(index){ 
            this.data[index] = data;
            this.saveData();
            this.reloadData();
            return this.select(data.id);
        }

        return undefined;
        
    }

    insert(data:T):T|undefined{

        const maxId = this.data.reduce((previous, current) => {
            return (current.id > previous) ? current.id : previous;
        }, 0);

        data.id = maxId + 1;
        this.data.push(data);
        this.saveData();
        this.reloadData();

        return this.select(data.id);
    }

    delete(id:number){
        const index = this.data.findIndex(elem=>elem.id === id);
        this.data.splice(index, 1);
        this.saveData();
        this.reloadData();

        return this.select(id);
    }

    private saveData(){
        fs.writeFileSync(`./src/data/${this.tableName}.json`, JSON.stringify(this.data));
    }
    private reloadData(){
        this.data = JSON.parse(fs.readFileSync(`./src/data/${this.tableName}.json`, 'utf-8')) as T[];
    }
}

export default Database;