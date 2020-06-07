# urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from rest_framework.authtoken import views
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
from api.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('employee/fetch_employees', HomeView.as_view()),
    path('employee/fetch_employees_and_salaries', EmployeeSalaryListView.as_view()),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^api-token-refresh/', refresh_jwt_token),
]