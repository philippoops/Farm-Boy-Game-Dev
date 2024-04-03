import Matter, { Sleeping } from "matter-js";
import Box from "./components/Box";
import Constants from "./Constants";
import Images from "./Images";

const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Physics = (entities, { touches, events, dispatch, time }) => {
  let engine = entities.physics.engine;
  if (events.length) {
    Sleeping.set(entities.Farmer.body, false);
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === "move-left") {
        Matter.Body.applyForce(
          entities.Farmer.body,
          entities.Farmer.body.position,
          { x: -0.0005, y: 0 }
        );
      }
      if (events[i].type === "move-right") {
        Matter.Body.applyForce(
          entities.Farmer.body,
          entities.Farmer.body.position,
          { x: 0.0005, y: 0 }
        );
      }
    }
  }

  // //******************** */
  // Matter.Body.setVelocity(entities.c1.body, { x: 0, y: 5 });
  // Matter.Body.setVelocity(entities.c2.body, { x: 0, y: 5 });
  // //********************** */

  Matter.Engine.update(engine, time.delta);

  let x = entities.Apple.body.position.x;
  let y = entities.Apple.body.position.y;

  Matter.Engine.update(engine, time.delta);

  Sleeping.set(entities.BoundaryB.body, false);
  Matter.Events.on(engine, "collisionStart", (event) => {
    var pairs = event.pairs;
    var objA = pairs[0].bodyA;
    var objB = pairs[0].bodyB;
    var objALabel = pairs[0].bodyA.label;
    var objBLabel = pairs[0].bodyB.label;

    if (objALabel === "Apple" && objBLabel === "BoundaryB") {
      Matter.Body.setVelocity(entities.Apple.body, {
        x: 0,
        y: 0,
      });

      // if (!objB.isSleeping) {
      //   dispatch({ type: 'updateScore' });
      // }
      Sleeping.set(objB, true);

      Matter.Body.setPosition(entities.Apple.body, {
        x: randomBetween(25, Constants.WINDOW_WIDTH - 25),
        y: randomBetween(
          Constants.WINDOW_HEIGHT / 3,
          Constants.WINDOW_HEIGHT / 8
        ),
      });
    }

    if (objALabel === "Pineapple" && objBLabel === "BoundaryB") {
      Matter.Body.setVelocity(entities.Pineapple.body, {
        x: 0,
        y: 0,
      });

      // if (!objB.isSleeping) {
      //   dispatch({ type: 'updateScore' });
      // }
      // Sleeping.set(objB, true);

      Matter.Body.setPosition(entities.Pineapple.body, {
        x: randomBetween(25, Constants.WINDOW_WIDTH - 25),
        y: randomBetween(
          Constants.WINDOW_HEIGHT / 3,
          Constants.WINDOW_HEIGHT / 8
        ),
      });
    }

    if (objALabel === "Strawberry" && objBLabel === "BoundaryB") {
      Matter.Body.setVelocity(entities.Strawberry.body, {
        x: 0,
        y: 0,
      });

      // if (!objB.isSleeping) {
      //   dispatch({ type: 'updateScore' });
      // }
      // Sleeping.set(objB, true);

      Matter.Body.setPosition(entities.Strawberry.body, {
        x: randomBetween(25, Constants.WINDOW_WIDTH - 25),
        y: randomBetween(
          Constants.WINDOW_HEIGHT / 3,
          Constants.WINDOW_HEIGHT / 8
        ),
      });
    }

    if (objALabel === "Mango" && objBLabel === "BoundaryB") {
      Matter.Body.setVelocity(entities.Mango.body, {
        x: 0,
        y: 0,
      });

      // if (!objB.isSleeping) {
      //   dispatch({ type: 'updateScore' });
      // }
      // Sleeping.set(objB, true);

      Matter.Body.setPosition(entities.Mango.body, {
        x: randomBetween(25, Constants.WINDOW_WIDTH - 25),
        y: randomBetween(
          Constants.WINDOW_HEIGHT / 3,
          Constants.WINDOW_HEIGHT / 8
        ),
      });
    }

    if (objALabel === "Bomb" && objBLabel === "BoundaryB") {
      Matter.Body.setVelocity(entities.Bomb.body, {
        x: 0,
        y: 0,
      });

      // if (!objB.isSleeping) {
      //   dispatch({ type: 'updateScore' });
      // }
      Sleeping.set(objB, true);

      Matter.Body.setPosition(entities.Bomb.body, {
        x: randomBetween(25, Constants.WINDOW_WIDTH - 25),
        y: randomBetween(
          Constants.WINDOW_HEIGHT / 3,
          Constants.WINDOW_HEIGHT / 8
        ),
      });
    }

    if (objALabel === "EnemyWorm" && objBLabel === "BoundaryB") {
      Matter.Body.setVelocity(entities.EnemyWorm.body, {
        x: 0,
        y: 0,
      });

      // if (!objB.isSleeping) {
      //   dispatch({ type: 'updateScore' });
      // }
      Sleeping.set(objB, true);

      Matter.Body.setPosition(entities.EnemyWorm.body, {
        x: randomBetween(25, Constants.WINDOW_WIDTH - 25),
        y: randomBetween(
          Constants.WINDOW_HEIGHT / 3,
          Constants.WINDOW_HEIGHT / 8
        ),
      });
    }

    if (objALabel === "Farmer" && objBLabel === "Apple") {
      if (!objA.isSleeping) {
        dispatch({ type: "updateScore" });
      }
      Sleeping.set(objA, true);

      Matter.Body.setPosition(entities.Apple.body, {
        x: randomBetween(25, Constants.WINDOW_WIDTH - 25),
        y: randomBetween(
          Constants.WINDOW_HEIGHT / 3,
          Constants.WINDOW_HEIGHT / 8
        ),
      });

      // dispatch({ type: 'gameOver' });
    }

    if (objALabel === "Farmer" && objBLabel === "Pineapple") {
      if (!objA.isSleeping) {
        dispatch({ type: "updateScore" });
      }
      Sleeping.set(objA, true);

      Matter.Body.setPosition(entities.Pineapple.body, {
        x: randomBetween(25, Constants.WINDOW_WIDTH - 25),
        y: randomBetween(
          Constants.WINDOW_HEIGHT / 3,
          Constants.WINDOW_HEIGHT / 8
        ),
      });

      // dispatch({ type: 'gameOver' });
    }

    if (objALabel === "Farmer" && objBLabel === "Strawberry") {
      if (!objA.isSleeping) {
        dispatch({ type: "updateScore" });
      }
      Sleeping.set(objA, true);

      Matter.Body.setPosition(entities.Strawberry.body, {
        x: randomBetween(25, Constants.WINDOW_WIDTH - 25),
        y: randomBetween(
          Constants.WINDOW_HEIGHT / 3,
          Constants.WINDOW_HEIGHT / 8
        ),
      });
      // dispatch({ type: 'gameOver' });
    }

    if (objALabel === "Farmer" && objBLabel === "Mango") {
      if (!objA.isSleeping) {
        dispatch({ type: "updateScore" });
      }
      Sleeping.set(objA, true);

      Matter.Body.setPosition(entities.Mango.body, {
        x: randomBetween(25, Constants.WINDOW_WIDTH - 25),
        y: randomBetween(
          Constants.WINDOW_HEIGHT / 3,
          Constants.WINDOW_HEIGHT / 8
        ),
      });

      // dispatch({ type: 'gameOver' });
    }

    if (objALabel === "Farmer" && objBLabel === "Bomb") {
      entities.Farmer.extraOptions.image = Images.worm;
      // if (!objA.isSleeping) {
      //   dispatch({ type: 'updateScore' });
      // }
      // Sleeping.set(objA, true);

      // Matter.Body.setPosition(entities.Planet.body, {
      //   x: randomBetween(25, Constants.WINDOW_WIDTH - 25),
      //   y: randomBetween(
      //     Constants.WINDOW_HEIGHT / 3,
      //     Constants.WINDOW_HEIGHT / 8
      //   ),
      // });
      dispatch({ type: "gameOver" });
    }

    if (objALabel === "Farmer" && objBLabel === "EnemyWorm") {
      entities.Farmer.extraOptions.image = Images.worm;
      // if (!objA.isSleeping) {
      //   dispatch({ type: 'updateScore' });
      // }
      // Sleeping.set(objA, true);

      // Matter.Body.setPosition(entities.Planet.body, {
      //   x: randomBetween(25, Constants.WINDOW_WIDTH - 25),
      //   y: randomBetween(
      //     Constants.WINDOW_HEIGHT / 3,
      //     Constants.WINDOW_HEIGHT / 8
      //   ),
      // });
      dispatch({ type: "gameOver" });
    }
  });

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
