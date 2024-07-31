import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../page-objects/LoginPage";
import { Actor } from "@serenity-js/core";

Given("{actor} is at the login",
  async function (actor: Actor) {
   
  },
);

When("{pronoun} wants to learn more about test automation", async function (pronoun: Actor) {
   await LoginPage.learnMore();
});

Then("{pronoun} is able to see how it work",  async function (pronoun: Actor) {
 });
