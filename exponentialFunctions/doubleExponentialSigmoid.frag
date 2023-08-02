float doubleExponentialSigmoid (float x, float a){
  	float epsilon = 0.00001;
  	float min_param_a = 0.0 + epsilon;
  	float max_param_a = 1.0 - epsilon;
 	a = min(max_param_a, max(min_param_a, a));
 	a = 1.0 - a;
  
 	if (x <= 0.5){
		return pow(2.0 * x, 1.0 / a) / 2.0;
 	} 
	else {
    	return 1.0 - pow(2.0 * ( 1.0 - x), 1.0 / a) / 2.0;
 	}
}
