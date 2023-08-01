float quadraticThroughAGivenPoint(float x, float a, float b) {
    float epsilon = 0.00001;
    
    float min_param_a = 0.0 + epsilon;
    float max_param_a = 1.0 - epsilon;
    
    float min_param_b = 0.0;
    float max_param_b = 1.0;
    
    a = min(max_param_a, max(min_param_a, a));
    b = min(max_param_b, max(min_param_b, b));
    
    float A = (1.0-b) / (1.0-a) - b/a;
    float B = (A*pow(a, 2.0) - b) / a;
    
    float y = A*pow(x, 2.0) - B*x;
    return min(1.0, max(0.0, y));
}
