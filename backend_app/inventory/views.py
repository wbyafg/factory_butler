from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import permissions
from inventory.serializers import *
from inventory.models import *
import json



class ProductViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    # permission_classes = (permissions.AllowAny)

    

    def create(self, request):
        try:
            data = json.loads(request.body.decode("utf-8"))
            if 'product_name' in data:
                product_name = data['product_name']
            if product_name is not None:
                try:
                    existing_product = Product.objects.get(product_name=product_name)
                    return JsonResponse({"code": "E", "msg": "Product with same name exists"}, status=400)
                except Product.DoesNotExist:
                    product = Product()
                    serializer = ProductSerializer(product, data=data)
                    if serializer.is_valid():
                        serializer.save()
                        return JsonResponse({"code": "S", "msg": "Product created successfully"},status=200)
                    return JsonResponse(serializer.errors, status=400)
            else:
                return JsonResponse({"code": "E", "msg": "Product name is required"}, status=400)
        except Exception as e:
            return JsonResponse({"some error occured"},status=500)


    def update(self, request):
        try:
            data = json.loads(request.body.decode("utf-8"))
            if 'product_name' in data:
                product_name = data['product_name']
            if product_name is not None:
                try:
                    product = Product.objects.get(product_name=product_name)
                    serializer = ProductSerializer(product, data=data)
                    if serializer.is_valid():
                        serializer.save()
                        return JsonResponse({"code": "S", "msg": "Product created successfully"},status=200)
                    
                    return JsonResponse(serializer.errors, status=400)
                    
                except Product.DoesNotExist:
                    return JsonResponse({"code": "E", "msg": "no such product"}, status=400)
                    
            else:
                return JsonResponse({"code": "E", "msg": "Product name is required"}, status=400)
        except Exception as e:
            return JsonResponse({"some error occured"},status=500)



