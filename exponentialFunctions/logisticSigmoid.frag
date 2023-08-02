float logisticSigmoid(float x, float a){
    float epsilon = 0.0001;
 	float min_param_a = 0.0 + epsilon;
 	float max_param_a = 1.0 - epsilon;
    
 	a = max(min_param_a, min(max_param_a, a));
    a = 1.0 / (1.0 - a) - 1.0;
    
    float A = 1.0 / (1.0 + exp(-1.0 * ((x - 0.5) * a * 2.0)));
    float B = 1.0 / (1.0 + exp(a));
    float C = 1.0 / (1.0 + exp(-a));
    return (A - B) / (C - B);
}
