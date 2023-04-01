body {
    background-color: rgb(14, 14, 14);
    font-family: "Outfit", sans-serif;
    font-size: 19px;
    color: rgb(255, 225, 230);
    margin: 0px;
    padding: 0px;
    overflow: hidden;
  }

  #main {
    display: flex;
  }

  .div1 {
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(#582626, #292b41);
    position: relative;
  }

  .decoração {
    position: absolute;
    width: 300px;
    height: 300px;
    opacity: 10%;
    background-color: white;
    border-radius: 0vh 0vh 100vh 0vh;
  }

  .decoração2 {
    position: absolute;
    width: 200px;
    height: 200px;
    opacity: 10%;
    background-color: white;
    border-radius: 100vh 0vh 0vh 0vh;
    bottom: 0px;
    right: 0px;
  }

  .top {
    height: 70%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .bottom {
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 5vw;
    opacity: 70%;
  }

  .relatos {
    text-align: center;
  }

  .texto1 {
    margin-top: 6vh;
  }

  .numero {
    text-align: left;
    margin-top: -20px;
  }

  #pao {
    width: 400px;
    margin-top: 100px;
    transition: 50ms;
    cursor: pointer;
  }

  .adicional {
    position: relative;
    bottom: 30px;
    text-align: center;
  }

  .div2 {
    width: 37%;
    height: 100vh;
    background-color: rgb(0, 0, 0);
    display: flex;
    flex-direction: column;
  }

  .div2Top {
    width: 100%;
    height: 8%;
    background-color: rgb(14, 14, 14);;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .div2Mid {
    height: 15%;
    display: flex;
    gap: 30px;
    row-gap: 70px;
    padding: 30px;
    flex-wrap: wrap;

    div {
      width: 100px;
      height: 100px;
      cursor: pointer;
      padding: 3px;
      border-radius: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }

  /* upgrades começam*/
  /* a1 começa */

  #a1 {
    background-color: lightgreen;
    display: none;

    &::before, &::after {
      --scale: 0;
      position: absolute; 
      transform: translateX(-120%) translateY(20%) scale(var(--scale));
      transition: 100ms transform; 
      transform-origin: right center;
    } 

    &::before {
      content: attr(data-tooltip1); 
      padding: 15px;
      width: 240px;
      background-color: rgb(0, 0, 0);
      color: rgb(255, 233, 196);
      opacity: 90%;
      border-radius: 10px;
      text-align: center;
    } 
    &:hover::before {
      --scale: 1;
    }
  }

  /* a1 acaba */
  /* a2 começa */

  #a2 {
    background-color: lightblue;
    display: none;
  }

  &::before, &::after {
    --scale: 0;
    position: absolute; 
    transform: translateX(-120%) translateY(20%) scale(var(--scale));
    transition: 100ms transform; 
    transform-origin: right center;
  } 

  &::before {
    content: attr(data-tooltip2); 
    padding: 15px;
    width: 240px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 233, 196);
    opacity: 90%;
    border-radius: 10px;
    text-align: center;
  } 
  &:hover::before {
    --scale: 1;
  }

  /* a2 acaba */
  /* a3 começa */

  #a3 {
    background-color: lightcoral;
    display: none;
  }

  &::before, &::after {
    --scale: 0;
    position: absolute; 
    transform: translateX(-120%) translateY(20%) scale(var(--scale));
    transition: 100ms transform; 
    transform-origin: right center;
  } 

  &::before {
    content: attr(data-tooltip3); 
    padding: 15px;
    width: 240px;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 233, 196);
    opacity: 90%;
    border-radius: 10px;
    text-align: center;
  } 
  &:hover::before {
    --scale: 1;
  }

  /* a3 termina */
  /* upgrades terminam */

  .div2Bottom {
    height: 77%;
    width: 100%;
  }

  .div3 {
    width: 23%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .informativo {
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .containerMelhorias {
    height: 91vh;
    width: 97%;
    overflow-y: auto;
  }

  .atributo {
    width: 100%;
    height: 12vh;
    display: flex;
    margin-bottom: 15px;
  }

  .img {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .conteudo {
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imagem {
    width:9vh;
    height: 9vh;
    border-radius: 0.5vh;
    cursor: pointer;
  }

  .nome {
    position: relative;
    bottom: 10px;
  }

  #numeroNpc {
    margin-left: 40px;
  }

  .informações {
    font-size: 17px;
    position: relative;
    bottom: 35px;
  }

  @media (max-width: 1100px) {
    body {
      overflow: auto;
    }
    #main {
      flex-direction: column;
    }
    .div1, .div2, .div3 {
      width: 100%;
    }
    .img {
      height: 100%;
    }
  }