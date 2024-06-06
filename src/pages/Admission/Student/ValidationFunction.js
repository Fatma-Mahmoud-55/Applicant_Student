const Obj={
    // 'nameEn':/^[A-Za-z]{3,}$/,
    // 'nameAr':/[\u0600-\u06FF\u0750-\u077F]/,
    'PDF':{
        regex:/\.pdf$/,
        errorMessage:'it should be PDF',
    },
    'Image':{
        regex: /\.(jpg|jpeg|png|gif|bmp)(?<!\.pdf)$/i,
        errorMessage:'it should be Image',
    } ,
    'image':{
        regex: /\.(jpg|jpeg|png|gif|bmp)(?<!\.pdf)$/i,
        errorMessage:'it should be Image',
    }
}

export  const validationFunction=(key,value,setText)=>{
   if(Obj[key].regex.test(value)){
       setText('');
       // console.log('valid',true);
      return true;
   }else{
       setText(Obj[key].errorMessage);
       // console.log('valid',false);
       return false;
   }
}