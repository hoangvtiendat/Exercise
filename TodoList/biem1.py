n=int(input())
dem=0
check = 0
if n>0:
    while n!=0:

        
        if n%10==0:
            if(check == 0 and dem == 0):
                dem = dem + 1;
                n = n //10;
                continue;
            else:
                print(n % 10);
                n = n // 10;
                check = check + 1;

        else:
            print(n % 10);
            n = n // 10;
        check = check + 1;

# n = int(input("Nhập số nguyên dương n: "))
# reverse_number = 0

# while n != 0:
#     last_digit = n % 10  # Lấy chữ số cuối cùng của n
#     if last_digit != 0 or reverse_number != 0:  # Nếu chữ số cuối cùng khác 0 hoặc số đảo ngược đã có chữ số khác 0
#         reverse_number = reverse_number * 10 + last_digit  # Thêm chữ số cuối cùng vào số đảo ngược
#     n = n // 10  # Loại bỏ chữ số cuối cùng của n

# print("Số đảo ngược của n là:", reverse_number)