import app from "./app";
import { envFile } from "./config/secrets";


const main = async () => {
  try {

    app.listen(envFile.port, () =>{
        console.log(`app is listen op port ${envFile.port}`);
    })
    
  } catch (error) {
    console.log(error);
  }
}

main()

