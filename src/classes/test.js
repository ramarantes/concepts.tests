import React from 'react'

class Test{

    set(a){
        this.a = a;
    }
    get(){
        return this.a;
    }
}

export default new Test();