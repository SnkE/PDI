for (let n = 1; n <= 10; n++) {
    let triangular = 0;
    for (let i = 1; i <= n; i++) {
      triangular += i;
    }
    console.log(`Número triangular de ${n} es: ${triangular}`);
  }
  