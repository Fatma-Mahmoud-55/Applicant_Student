from rest_framework import serializers
from .models import *
 


# class addEmployeeSerializers(serializers.Serializer):
class addEmployeeSerializers(serializers.Serializer):
    
    user_name=serializers.CharField()# for retreiving id
    aerp_branch_id=serializers.ListField(child=serializers.DictField())#
    # emp_id=serializers.CharField()
    en_first_name= serializers.CharField()
    en_second_name= serializers.CharField()
    en_third_name= serializers.CharField()
    lc_first_name= serializers.CharField()
    lc_second_name= serializers.CharField()
    lc_third_name= serializers.CharField()
    lc_last_name= serializers.CharField()
    gender= serializers.CharField()
    birth_date= serializers.DateField()
    birth_place= serializers.CharField()
    blood_group=serializers.CharField()
    military_stattus_id= serializers.ListField(child=serializers.DictField())#
    nationality_id= serializers.ListField(child=serializers.DictField()) #
    marital_status_id= serializers.ListField(child=serializers.DictField()) #
    children_count= serializers.IntegerField()
    husband_name= serializers.CharField()
    identity_no= serializers.CharField()
    identity_issue_date= serializers.DateField()
    identity_expiry_date= serializers.DateField()
    identity_issuing_place= serializers.CharField()
    identity_profession_name= serializers.CharField()
    passport_no= serializers.CharField()
    passport_issued_date= serializers.DateField()
    passport_expiry_date= serializers.DateField()
    passport_issuing_place= serializers.CharField()
    passport_profession_name= serializers.CharField()
    candidate_application_id= serializers.IntegerField() #
    emp_join_date=serializers.DateField()
    emp_end_working_date=serializers.DateField
    emp_photo=serializers.ImageField()
    emp_qualification_id= serializers.ListField(child=serializers.DictField()) #
    emp_qualification_date=serializers.DateField()
    emp_qualification_institute=serializers.CharField()
    emp_qualification_appreciation_id=serializers.ListField(child=serializers.DictField()) #
    emp_category_id= serializers.ListField(child=serializers.DictField()) #
    emp_department_id= serializers.ListField(child=serializers.DictField()) #
    emp_positions=serializers.ListField(child=serializers.DictField()) #
    emp_job_title_id= serializers.ListField(child=serializers.DictField()) #
    emp_grade_id=serializers.ListField(child=serializers.DictField()) #
    emp_manage_id=serializers.ListField(child=serializers.DictField()) #
    contract_type_id=serializers.ListField(child=serializers.DictField()) #
    home_address_line1= serializers.CharField()
    home_address_line2= serializers.CharField()
    home_city= serializers.CharField()
    home_state= serializers.CharField()
    hoe_country_id= serializers.ListField(child=serializers.DictField()) #
    home_postal_code= serializers.CharField()
    homr_phone_number= serializers.CharField()
    emp_personal_email= serializers.CharField()
    home_latitude= serializers.FloatField()
    home_longitude= serializers.FloatField()
    office_address_lin1= serializers.CharField()
    office_address_lin2= serializers.CharField()
    office_city= serializers.CharField()
    office_state= serializers.CharField()
    office_country_id=serializers.ListField(child=serializers.DictField()) #
    office_postal_code= serializers.CharField()
    office_phone_no1= serializers.CharField()
    office_phone_no2= serializers.CharField()
    office_hotline= serializers.CharField()
    office_phone_ext= serializers.CharField()
    office_fax= serializers.CharField()
    office_mobile= serializers.CharField()
    emp_official_mail=serializers.CharField()
    office_latitude=serializers.FloatField()
    office_longitude=serializers.FloatField()
    emp_mobile1= serializers.CharField()
    emp_mobile2= serializers.CharField()
    note= serializers.CharField()
    # status_id
    # ip_address=serializers.CharField()
    # created_by= serializers.IntegerField()
    # updated_by=serializers.IntegerField()
    # created_at= serializers.DateTimeField()
    # updated_at= serializers.DateTimeField()
    # class Meta:
    #     model = ahrm_employess
    #     fields = '__all__'
    
    # class Meta:
    #     model = ahrm_employess
    #     fields = [
    #         'user_name',
    #         'aerp_branch_id',
    #         'emp_id',
    #         'en_first_name',
    #         'en_second_name',
    #         'en_third_name',
    #         'en_last_name',
    #         'lc_first_name',
    #         'lc_second_name',
    #         'lc_third_name',
    #         'lc_last_name',
    #         'gender',
    #         'birth_date',
    #         'birth_place',
    #         'blood_group',
    #         'military_stattus_id',
    #         'nationality_id',
    #         'marital_status_id',
    #         'children_count',
    #         'husband_name',
    #         'identity_no',
    #         'identity_issue_date',
    #         'identity_expiry_date',
    #         'identity_issuing_place',
    #         'identity_profession_name',
    #         'passport_no',
    #         'passport_issued_date',
    #         'passport_expiry_date',
    #         'passport_issuing_place',
    #         'passport_profession_name',
    #         'candidate_application_id'
    #         'emp_join_date',
    #         'emp_end_working_date',
    #         'emp_photo',
    #         'emp_qualification_id',
    #         'emp_qualification_date',
    #         'emp_qualification_institute',
    #         'emp_qualification_appreciation_id',
    #         'candidate_application_id',
    #         'emp_join_date',
    #         'emp_end_working_date',
    #         'emp_photo',
    #         'emp_qualification_id',
    #         'emp_qualification_date',
    #         'emp_qualification_institute',
    #         'emp_qualification_appreciation_id',
    #         'emp_category_id',
    #         'emp_department_idI',
    #         'emp_positions',
    #         'emp_job_title_id',
    #         'emp_grade_id',
    #         'emp_manage_id',
    #         'contract_type_id',
    #         'home_address_line1',
    #         'home_address_line2',
    #         'home_city',
    #         'home_state',
    #         'hoe_country_id',
    #         'home_postal_code',
    #         'homr_phone_number',
    #         'emp_personal_email',
    #         'home_latitude',
    #         'home_longitude',
    #         'office_address_lin1',
    #         'office_address_lin2',
    #         'office_city',
    #         'office_state',
    #         'office_country_id',
    #         'office_postal_code',
    #         'office_phone_no1',
    #         'office_phone_no2',
    #         'office_hotline',
    #         'office_phone_ext',
    #         'office_fax',
    #         'office_mobile',
    #         'emp_official_mail',
    #         'office_latitude',
    #         'office_longitude',
    #         'emp_mobile1',
    #         'emp_mobile2',
    #         'note',
    #         # status_id
    #         # 'ip_address',
    #         # 'created_by',
    #         # 'updated_by',
    #         # 'created_a',
    #         # 'updated_at',
    #     ]


class periodic_table_serializer(serializers.Serializer):
    ele_arr= serializers.ListField()
    
class add_evaluation_serializer(serializers.Serializer):
    employee=serializers.ListField()
    element=serializers.ListField()
    category=serializers.ListField()
    evaluation=serializers.ListField()
    notes=serializers.CharField()

class date_list_serializer(serializers.Serializer):
    date_list=serializers.ListField()
    employee_id=serializers.IntegerField()
 
# class ahrm_emp_grade_add_serializer(serializers.Serializer):