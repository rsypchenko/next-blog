import React from "react";
import Typewriter from "typewriter-effect";

export const TypingEffect = () => {
  return (
    <div>
      <h3>Hello, I am</h3>
      <Typewriter
        options={{
          // strings: ["Frontend Developer!", "Backend Developer!"],
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Frontend Developer!")
            .pauseFor(2500)
            .deleteAll()
            .typeString("Backend Developer!")
            .start();
        }}
      />
    </div>
  );
};
