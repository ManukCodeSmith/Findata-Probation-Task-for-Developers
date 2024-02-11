comp3 = {}
comp4 = {}
commen_keys1 = {}

with open('CompanyB_Quarter1.txt', 'r') as file:
	lines = file.readlines()

for line in lines:
	try:
		key, value = line.strip().split(':')
		comp3[key] = value
	except Exception as e:
		print("Error:", e)



print(comp3)

with open('CompanyB_Quarter2.txt', 'r') as file:
	lines = file.readlines()


for line in lines:
	try:
		key, value = line.strip().split(':')
		comp4[key] = value.strip()
	except Exception as e:
		print ("Error:", e)

print(comp4)

for key in comp4:
	if key not in ['Company', 'Quarter']:
		commen_keys1[key] = float(comp4[key].replace('$', '').replace(',','')) - float(comp3[key].replace('$','').replace(',',''))



print(commen_keys1)
