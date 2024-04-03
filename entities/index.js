import Box from '../components/Box';
import { Dimensions } from 'react-native';
import Boundary from '../components/Boundary';
import Matter from 'matter-js';
import Constants from '../Constants';
import Images from '../Images';
import Circle from '../components/Circle';
import { circle } from 'react-native/Libraries/Animated/Easing';

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 0.008;

  return {
    physics: { engine, world },

    Farmer: Box(
      world,
      '',
      { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 1.25 },
      { width: 45, height: 70 },
      { isStatic: false, image: Images.farmBoy, label: 'Farmer' }
    ),

    Apple: Box(
      world,
      '',
      { x: Constants.WINDOW_WIDTH / 1.8, y: Constants.WINDOW_HEIGHT / 7 },
      { width: 40, height: 40 },
      { isStatic: false, image: Images.apple, label: 'Apple' }
    ),

    Pineapple: Box(
      world,
      '',
      { x: Constants.WINDOW_WIDTH / 2.5, y: Constants.WINDOW_HEIGHT / 4 },
      { width: 40, height: 40 },
      { isStatic: false, image: Images.pinaeapple, label: 'Pineapple' }
    ),

    Strawberry: Box(
      world,
      '',
      { x: Constants.WINDOW_WIDTH / 1.2, y: Constants.WINDOW_HEIGHT / 6 },
      { width: 40, height: 40 },
      { isStatic: false, image: Images.strawberry, label: 'Strawberry' }
    ),
    Bomb: Box(
      world,
      '',
      { x: Constants.WINDOW_WIDTH / 1.2, y: Constants.WINDOW_HEIGHT / 6 },
      { width: 40, height: 40 },
      { isStatic: false, image: Images.bomb, label: 'Bomb' }
    ),
    BoundaryB: Boundary(
      world,
      'transparent',
      { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 1 },
      { width: Constants.WINDOW_WIDTH, height: 10 },
      { isStatic: false, label: 'BoundaryB' }
    ),

    BoundaryL: Boundary(
      world,
      'transparent',
      { x: 0, y: Constants.SCREEN_WIDTH },
      { width: 20, height: Constants.SCREEN_WIDTH * 2.5 },
      { isStatic: false, label: 'BoundaryL' }
    ),

    BoundaryR: Boundary(
      world,
      'transparent',
      { x: Constants.SCREEN_WIDTH, y: Constants.SCREEN_WIDTH },
      { width: 20, height: Constants.SCREEN_WIDTH * 2.5 },
      { isStatic: false, label: 'BoundaryR' }
    ),

    BoundaryT: Boundary(
      world,
      'transparent',
      { x: Constants.WINDOW_WIDTH / 2, y: 0 },
      { height: 20, width: Constants.WINDOW_WIDTH },
      { label: 'BoundaryT' }
    ),
  };
};
