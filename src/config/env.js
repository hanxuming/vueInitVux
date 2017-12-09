
var baseUrl=""; 
export  function geturl(){
  /**
   * 开发环境
   */  
if(process.env.NODE_ENV=='development'){
    
           return baseUrl;
}else{
     baseUrl+="http://"+document.location.host+"/download"
        return baseUrl;
    }
}
 