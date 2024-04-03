import { View, Image } from "react-native";
import Matter from "matter-js";
//import Images from "../Images";

const Circle = (props) => {
  const width = props.radius * 2;

  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - width / 2;

  return (

<Image
        style={{
        width:  width,
        height: width,
        left: x,
        top: y,
        //backgroundColor: props.color,
        //transform: [{ rotate: angle }],
        position: "absolute",
        borderRadius: props.radius,

        }}
        resizeMode="stretch"
        source={props.extraOptions.image}
      />
 
  );
};

export default (world, color, pos, radius, extraOptions) => {
  const theCircle = Matter.Bodies.circle(pos.x, pos.y, radius,
    { label: extraOptions.label,
      
        frictionAir: 0,
        angularVelocity: 0,
        restitution: extraOptions.restitution,
        mass: 1,
        friction: 0,
        frictionStatic: 0,
        isStatic: extraOptions.isStatic,
        isSleeping: extraOptions.isSleeping,
  });
  Matter.World.add(world, theCircle);
  return { body: theCircle, color, radius,extraOptions, renderer: <Circle /> };
};
1;
