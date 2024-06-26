import { Dimensions, View, Image } from "react-native";
import Matter from "matter-js";

const Box = (props) => {

  //const width = props.body.bounds.max.x - props.body.bounds.min.x;
  //const height = props.body.bounds.max.y - props.body.bounds.min.y;

  const width = props.size.width;
  const height = props.size.height;


  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;

  let angle = props.body.angle + "deg";
    return (
      <Image
      style={{
      width:  props.size.width,
      height: props.size.height,
      left: xPos,
      top: yPos,
      //backgroundColor: props.color,
      //transform: [{ rotate: angle }],
      position: "absolute",
      }}
      resizeMode="stretch"
      source={props.extraOptions.image}
    />
    );
  };
  
  export default (world,color, pos, size, extraOptions) => {
    const theBox = Matter.Bodies.rectangle(
      pos.x,
      pos.y,
      size.width,
      size.height,
      { label: extraOptions.label,
        frictionAir: 0,
        angularVelocity: 0,
        restitution: 1,
        mass: 1,
        friction: 0,
        frictionStatic: 0,
        isStatic: extraOptions.isStatic,
        //velocity: { x: 1, y: 1 },
      } );
    
    Matter.World.add(world, theBox);
    return { body: theBox, color, pos, size, extraOptions,  renderer: <Box /> };
  };