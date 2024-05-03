[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bYxIFmM9)
# FED23 Testning - Inlämningsuppgift 1

## Enhetstester med vitest

Syftet med detta repo är att det skall fungera som er kod som ni får given. Ni skall inte ändra på funktionaliteten som nu finns på något sätt.

## Gör er bekväm med koden

Jag vill att ni tittar igenom koden, gör er bekväm med den så att ni förstår vad den gör. Testkör applikationen och se till att den beter sig som ni tänker er att den skall göra. Ni får i detta läge absolut lägga till en del `console.log` där ni känner för det.

### Att köra applikationen

När ni har klonat ner ert egna repo för uppgiften så kör ni:

- `npm install`
- `npm run dev`

För att starta testerna så kör ni

- `npm run test` (alternativt `npm run test:verbose` för mer information)

och för att få en code coverage report så kör ni

- `npm run coverage`

## Er uppgift

Det ni behöver göra i denna inlämning är att skapa nedan 7 tester för de funktioner som finns i `src/functions.ts`. Då bör ni nå 100% code coverage. Ni får så klart skapa fler tester om ni vill, men nedan krävs för att få godkänt.

Testerna skall vara skrivna med jest och skall finnas i `src/tests/functions.test.ts`. Ni skall gruppera era tester med `describe` och `it` så att det blir lätt att förstå vad som testas och ni ska använda `expect` för att göra era assertions. Inom parentes står det minsta antalet `expect` som skall finnas i varje test. Självklart ska ni skriva fler om ni anser att det behövs. Det viktiga är att ni testar **alla** möjliga vägar genom er kod.

Tänk på att varje test vara isolerat och inte påverka andra tester. Detta kan ni göra genom att använda `beforeEach` och `afterEach` för att sätta upp och städa undan efter varje test.

- add todo
  - should add a todo (3)
  - should not add a todo with empty title (3)
  - should not add a todo with title shorter than 3 characters (3)
- toggle todo
  - should toggle a todo (2)
  - should not toggle a todo that does not exist (2)
- delete todo
  - should delete a todo (2)
  - should not delete a todo that does not exist (2)
