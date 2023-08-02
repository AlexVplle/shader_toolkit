float doublePolynomialSigmoid(float x, float a, float b, float n) {
    if (mod(n, 2.0) == 0.0) {
        if (x <= 0.5)
            return pow(2.0 * x, n);
        else
            return 1.0 + pow(2.0 * (x-1.0), n) / 2.0;
    } 
    else {
        if (x <= 0.5)
            return pow(2.0*x, n) / 2.0;
        else
            return 1.0 + pow(2.0 * (x-1.0), n) / 2.0;
    }
}
