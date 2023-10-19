


class Todo{

    private id?:number;
    title:string;
    description:string;

    constructor(id:number, title:string, description:string){
        this.title = title;
        this.description = description;
        this.id = id;
    }

    setTitle(title:string){
        this.title = title;
    }

    setDescription(description:string){
        this.description = description;
    }

    getId(){
        return this.id;
    }
}

export default Todo