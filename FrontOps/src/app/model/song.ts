export class Song {

    id:number;
    name:string;
  
    constructor (id?:number,name?:string) {
        this.setId(id);
        this.setName(name);
    }
  
    getId() : number {
      return this.id;
    }
    getName() : string {
      return this.name;
    }
  
    setId(id:number) : void {
      this.id = id;
    }
    setName(name:string) : void {
      this.name = name;
    }
  
  }