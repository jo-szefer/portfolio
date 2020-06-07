import React from "react";
import styled from "styled-components";

const Star = styled.div`
  position: absolute;
  border-radius: 50%;
  animation: animStar 60s linear infinite;

  @keyframes animStar {
    0% {
      top: 100vh;
    }
    100% {
      top: -5px;
    }
  }
`;

export const Background = () => {
  const getStars = (count, size, speed) => {
    const stars = [];
    const colors = ["#fff", "#cad8ff", "#ffebd1"];

    for (let i = 0; i < count; ++i) {
      const colorIndex = Math.floor(Math.random() * colors.length);
      const color = colors[colorIndex];

      stars.push({
        left: `${Math.floor(Math.random() * 100)}vw`,
        animationDelay: `-${Math.floor(Math.random() * 100)}s`,
        animationDuration: `${speed}s`,
        backgroundColor: color,
        boxShadow: `0 0 20px ${color}`,
        height: size,
        width: size,
      });
    }

    return stars;
  };

  return (
    <div>
      {getStars(10, 5, 20).map((star) => (
        <Star style={star} />
      ))}
      {getStars(20, 3, 40).map((star) => (
        <Star style={star} />
      ))}
      {getStars(30, 1, 60).map((star) => (
        <Star style={star} />
      ))}
    </div>
  );
};
