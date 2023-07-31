float blinnWyvillCosineApproximation(float x) {
    float x2 = pow(x, 2.0);
    float x4 = pow(x2, 2.0);
    float x6 = x4 * x2;
    
    const float fa = 4.0 / 9.0;
    const float fb = 17.0 / 9.0;
    const float fc = 22.0 / 9.0;
    
    return fa*x6 - fb*x4 + fc*x2;
}
