import React from "react";

const Footer = () => {
  return (
    <div class="footer">
    <div class="container">
    <div class="row footer-nav">
    <div class="col-md-3">
    <h6><a class="footer-menu" href="/about">Σχετικά</a></h6>
    </div>
    <div class="col-md-3">
    <h6><a class="footer-menu" href="/contact">Επικοινωνία</a></h6>
    </div>
    <div class="col-md-3">
    <h6><a class="footer-menu" href="/terms">Όροι χρήσης</a></h6>
    </div>
    <div class="col-md-3">
    <h6><a class="footer-menu" href="/privacy">Προσωπικά δεδομένα</a></h6>
    </div>
    </div>
    <div class="col-md-12">
    <h6>Design & development by Dimitris Liaropoulos</h6>
    <p>@2019</p>
    </div>
    </div>
    </div>
  );
};

export default Footer;
