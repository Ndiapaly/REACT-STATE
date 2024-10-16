import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    // Initialisation de l'état
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Développeur full-stack passionné par React",
        imgSrc:
          "https://www.campussuddesmetiers.com/wp-content/uploads/2022/05/iStock-1017296544.jpg",
        profession: "Développeur",
      },
      montre: false,
      timeElapsed: 0,
    };
  }

  componentDidMount() {
    // Incrémenter le temps écoulé chaque seconde
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Méthode pour basculer l'état "montre"
  toggleShow = () => {
    this.setState((prevState) => ({
      montre: !prevState.montre,
    }));
  };

  render() {
    const { person, montre, timeElapsed } = this.state;

    return (
      <div className="App container text-center mt-5">
        <button className="btn btn-primary mb-4" onClick={this.toggleShow}>
          {montre ? "Cacher le profil" : "Afficher le profil"}
        </button>

        {montre && (
          <div
            className="card shadow-sm p-3 mb-5 bg-white rounded"
            style={{ width: "18rem", margin: "auto" }}
          >
            <img
              src={person.imgSrc}
              className="card-img-top rounded-circle"
              alt={person.fullName}
              style={{ width: "150px", height: "150px", margin: "auto" }}
            />
            <div className="card-body">
              <h5 className="card-title">{person.fullName}</h5>
              <p className="card-text">{person.bio}</p>
              <p className="text-muted">{person.profession}</p>
            </div>
          </div>
        )}

        <p className="mt-3">
          Temps écoulé depuis le montage : <strong>{timeElapsed}</strong>{" "}
          secondes
        </p>
      </div>
    );
  }
}

export default App;
