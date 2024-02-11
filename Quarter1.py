from Quarter2 import*
comp1 = {}
comp2 = {}
commen_keys = {}

with open('CompanyA_Quarter1.txt', 'r') as file:
	lines = file.readlines()

for line in lines:
	try:
		key, value = line.strip().split(':')
		comp1[key] = value
	except Exception as e:
		print("Error:", e)



print(comp1)

with open('CompanyA_Quarter2.txt', 'r') as file:
	lines = file.readlines()


for line in lines:
	try:
		key, value = line.strip().split(':')
		comp2[key] = value.strip()
	except Exception as e:
		print("Error:", e)

print(comp2)

for key in comp2:
	if key not in ['Company', 'Quarter']:
		commen_keys[key] = float(comp2[key].replace('$', '').replace(',', '')) - float(comp1[key].replace('$', '').replace(',', ''))



print(commen_keys)


while True:
	Copani = input("If you want to see information of companies, press 1 for for Company1, and 2 for Company2\n")
	if Copani == '1':
		print(commen_keys)
		break
	elif Copani == '2':
		print(commen_keys1)
		break
	

