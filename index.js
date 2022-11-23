function receivesAFunction(myFunction){
    return myFunction();
}

function returnsANamedFunction() {
    return function hiLiz(){return helloLiz;};
}
returnsANamedFunction;

function returnsAnAnonymousFunction(){
    return function(){return anonymous;};
}
returnsAnAnonymousFunction;