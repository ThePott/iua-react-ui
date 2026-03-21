# Runtime theme change feature

## Current state

- set colorscheme's colors in `index.css`
- if I pass `data-scheme` to html, the color is applied

## What I want

- I want to create webpage for this package. and I want user to change theme in run time.

## Question

- how can I do this? I'm thinking something like `<ColorSchemeProvider />` and wrap the highest level component, but
  this is not `<html />` so not `:root`. then my conditional css will not be applied. what should I do?
