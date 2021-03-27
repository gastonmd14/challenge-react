import React from "react";
import Table from './Table'
function Body() {
  return (
    <body>
      <section class="principal">

        <Table />

        <h1>You need to <a class="log" href="/users/login">LOGIN</a> first !¡</h1>
        
      </section>
    </body>
  );
}

export default Body;
