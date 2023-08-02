float doubleCubicSeat(float x, float a, float b) {
    float epsilon = 0.00001;
    
    float min_param_a = 0.0 + epsilon;
    float max_param_a = 1.0 - epsilon;
    
    float min_param_b = 0.0;
    float max_param_b = 1.0;
    
    a = min(max_param_a, max(min_param_a, a));
    b = min(max_param_b, max(min_param_b, b));
    
    if (x <= a)
        return b - b*pow(1.0 - x/a, 3.0);
    else
        return b + (1.0 - b) * pow((x-a) / (1.0 - x), 3.0);
}
