import Axios from "axios";

class HelloWorldService {

    executeHelloWorldService(){
        //console.log("Executing Hello World Service")
        return Axios.get("http://localhost:8080/hello-world")
    }

    executeHelloWorldBeanService(){
        //console.log("Executing Hello World  BeanService")
        return Axios.get("http://localhost:8080/hello-world-bean")
    }

    executeHelloWorldPathVariableService(name){
        //console.log("Executing Hello World  Path Service")

        return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService() 