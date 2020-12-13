<header>Chart Generator</header>

<style>
  header {
    font-family: BrushGrunge;
    font-size: 60px;
    color: #660;
    text-align: center;
    margin: 16px 0;
    animation: floating 20s infinite ease;
    letter-spacing: 2px;
  }

  @keyframes floating {
    from {
      transform: rotate3d(0, 0.8, 0.02, -12deg);
      text-shadow: 12px 6px 3px rgba(0,0,0,0.15);
    }
    50% {
      transform: rotate3d(0, 0.8, 0.02, 12deg);
      text-shadow: -12px -6px 3px rgba(0,0,0,0.15);
    }
    to {
      transform: rotate3d(0, 0.8, 0.02, -12deg);
      text-shadow: 12px 6px 3px rgba(0,0,0,0.15);
    }
  }
</style>