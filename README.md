# Using ASP.NET MVC with AngularJS

This is a simple example using ASP.NET MVC + Entity Framework Code First from DataBase + AngularJS. The DB that I'm using here is northwind you can download from here https://northwinddatabase.codeplex.com/. 

If you want to use this solution you don't need change anything, APIs Url are dynamics. This project is incomplete for the moment, it just show products list but, you can see also categories list if you put the API url in your browser.

This solution uses:

* Bootstrap + custom theme
* AngularJS
* Angular-Route
* Jquery
* SweetAlert

and...

* Entity Framework
* C#
* ASP.NET MVC
* CodeFirst

I've developed with Visual Studio 2015 and SQL SERVER 2014

Don't forget to change this connection string when you clone this project:

```
  <connectionStrings>
    <add name="NWEntities" connectionString="data source=.;initial catalog=NORTHWND;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework" providerName="System.Data.SqlClient" />
  </connectionStrings>
```
