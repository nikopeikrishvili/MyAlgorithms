#include <stdio.h>
int main()
{
	char number[256];
	printf("Please write number : ");
	fgets(number,255,stdin);
	printf("Result is %i\n",phi(atoi(number)));

	return 0;
}
int phi (int n) {
	int result = n;
	int i=0;
	for (i=2; i*i<=n; ++i)
		if (n % i == 0) {
			while (n % i == 0)
				n /= i;
			result -= result / i;
		}
	if (n > 1)
		result -= result / n;
	return result;
}