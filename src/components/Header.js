import React from "react";

const Header = () => {
  return (
    <div>
      <div className="jumbotron p-3 p-md-5 text-white rounded">
        <div className="col-md-6 px-0 container">
          <h1
            className="display-4"
            style={{ color: "#23374d", fontWeight: "bold" }}
          >
            Όλη η επικαιρότητα σε ένα κανάλι !
          </h1>
          <h4 style={{ color: "#23374d", fontWeight: "bold" }}>Επιλέξτε την κατηγορία που σας ενδιαφέρει και διαβάστε τα τελευταία νέα από τα πιο
          δημοφιλή μέσα ενημέρωσης.</h4>
          <p className="lead my-3" />
        </div>
      </div>
    </div>
  );
};

export default Header;
