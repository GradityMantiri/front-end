//Mantiri, Gradity Beca Laurette
//Ex06

// helloWorld.js
export default function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}


