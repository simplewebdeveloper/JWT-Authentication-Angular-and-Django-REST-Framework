# views.py
from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class HomeView(APIView):

    def get(self, request, format=None):
        if request.method == 'GET':
            employees = [
                'Kazan Faire',
                'Adam Payne',
                'Judy Lowell',
                'Sara Niles',
                'Dylan White',
            ]
            return Response(employees)

class EmployeeSalaryListView(APIView):
    authentication_classes = [JSONWebTokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        if request.method == 'GET':
            employee_salary_list = {
                'Kazan Faire': '50k',
                'Adam Payne': '50k',
                'Judy Lowell': '80k',
                'Sara Niles': '100k',
                'Dylab White': '30k',
            }
            return Response(employee_salary_list)

