class MyException extends Error{

}

export const callMe = (name) =>{
    if(name==="Taufik"){
        throw new MyException("Ups my Exeption happens");
    }else{
        return "OK";
    }
}