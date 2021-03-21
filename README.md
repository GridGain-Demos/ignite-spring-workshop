## How to use Apache Ignite and Spring to build a reliable distributed web application

Spring is a popular framework, and Apache Ignite is a fast layer for data storage. Adding Ignite enables you to manage http sessions, cache-application data, 
and so on. In this demo, I use Spring Framework and ReactJS to create a simple web application and demonstrate how Apache Ignite can empower the application. 
  
The steps are the following:  
* Initial configuration of the application ([Commit](https://github.com/GridGain-Demos/ignite-spring-workshop/commit/359e71546d520f6709c5fc15db3ff18ef095916d))
* Adding authorization to the application ([Commit](https://github.com/GridGain-Demos/ignite-spring-workshop/commit/bca6627abfda3975d7a5d93beb0b5ee73499b06d))
* Configuring REST controllers and Spring Data repositories to do app's business logic ([Commit](https://github.com/GridGain-Demos/ignite-spring-workshop/commit/b9f9e1166b5301ff02fffdeac7d8355f317228fd))
* Configuring Apache Ignite to increase the application's durability ([Commit](https://github.com/GridGain-Demos/ignite-spring-workshop/commit/10c2e5c1babddae6ac7c7bfbc5b49f71ebf11bfc))

**You will need Java, Maven and NodeJS to run this application**  
Running backend application: Run SpringWorkshopApplication.java with your IDE or via `mvn spring-boot:run`.  
Running frontend application: Run `npm run start` in the frontend directory.   

You can see the demo recording here: https://youtu.be/Jc-6yQiq-Io

[![YouTube Video](https://img.youtube.com/vi/Jc-6yQiq-Io/0.jpg)](https://www.youtube.com/watch?v=Jc-6yQiq-Io)
