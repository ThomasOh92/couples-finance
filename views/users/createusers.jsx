var React = require("react");

class CreateUsers extends React.Component {
  render() {
    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
            <link href='https://fonts.googleapis.com/css?family=Gloria+Hallelujah' rel='stylesheet' type='text/css'></link>
            <link rel="stylesheet" type="text/css" href="/style.css"></link>
        </head>
        <body className="pre-app-body">
          <div className ="container-fluid pre-app-box">

                <div class="row justify-content-center">
                    <div className="col-sm-6 col-md-4 d-inline-flex logo-container">
                   <img className="logo" src="/img/logo.png" alt="logo"/>
                   <h5 className="logo-text">Our Money Planner</h5>
                    </div>
                </div>


                <div class="row justify-content-center">
                  <div className="col-sm-6 col-md-4 shadow p-3 mt-3 mb-5 my-form">

                    <div className="container mb-4"><h3 className="form-header">Create Users</h3></div>
                    <form method="POST" action="/registration/users" className = "container">
                      <div className="form-group">
                        <input type="text" className="form-control" id="partnera" name="partnera" placeholder="Partner A"></input>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" id="partnerb" name="partnerb" placeholder="Partner B"></input>
                      </div>
                        <button type="submit" value="Submit" className="btn btn-primary">Create Users</button>
                    </form>

                  </div>
                </div>


          </div>
        </body>
      </html>
    );
  }
}

module.exports = CreateUsers;