# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./images/result-screenshot.PNG)

## My process

Basically learning css from scratch, so much of this challenge involved me putting what I've learnt about flexbox into practice.
I started off my separating the different components there was in creating the card.

1. We need a flexbox container to perfectly centre the card in the middle of the viewport. This was accomplished using the justify-content and align-items properties. This container also needed to fill the entire page, so I found out the best way to do this was {position: absolute; top: 0; bottom: 0; right: 0; left: 0;}
2. I then separated the card into the following parts:

- card image
- card description
- card/subject details
- creator info
  These used a lot of what I learnt about flexbox to easily organise the positioning of the elements, such as using spread to put eth and day left at either ends of the card row

## Improvements

I still need to develop my ability to optimise my css, ensuring that my selectors created aren't overly specific to reduce repetitiveness.
I also need to be able to utilise more css functions and attributes to accomplish the desired design to improve readability.
All it is right now is to keep learning and apply the best practices.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
