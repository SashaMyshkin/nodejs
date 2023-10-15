import dbObject from "./dbObject";


class Todo implements dbObject{

    id:number;
    title:string;
    description:string;

    constructor(id:number, title:string, description:string){
        this.id = id;
        this.title = title;
        this.description = description;
    }

    setId(id:number){
        this.id = id;
    }

    setTitle(title:string){
        this.title = title;
    }

    setDescription(description:string){
        this.description = description;
    }
}

export default Todo