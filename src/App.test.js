import React from "react";
import { mount } from "enzyme";
import App from "./App";
import Medal from "./Medal/Medal";
import MedalList from "./Medal/MedalList";
import CountryCard from "./Medal/CountryCard";
import SportList from "./Medal/SportList";

describe("AppScreen", () => {
  beforeEach(() => {
    props = {};
  });

  let props;
  let mountedApp;
  let AppScreen = () => {
    if (!mountedApp) {
      mountedApp = mount(
        <App />
      );
    }
    return mountedApp;
  }


  it("always renders a div", () => {
    let divs = AppScreen().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("always renders a Medal Section", () => {
  	let medal_imegs = AppScreen().find("div");
    expect(AppScreen().find(Medal).length).toBe(1);
  });

  it("always renders at least one Medal List Section", () => {
    expect(AppScreen().find(MedalList).length).toBeGreaterThan(0);
  });

  it("always renders at least one Country Card Section with the medal images and the flag of the country", () => {
  	let CountryCardSection = AppScreen().find(CountryCard);
  	
  	//Find the flag image
  	let card_body = CountryCardSection.find("div.card-body");
  	let flag_img = card_body.find("img");
  	expect(card_body.length).toBe(1);
	
  	//Find the gold, silver and bronze medal image
    let card_footer = CountryCardSection.find("div.card-footer");
  	let medal_imgs = card_footer.find("img");
    expect(medal_imgs.length).toBe(3);
    
    expect(AppScreen().find(CountryCard).length).toBeGreaterThan(0);
  });

});
