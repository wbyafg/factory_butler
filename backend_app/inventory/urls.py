from django.conf.urls import url

from . import views

product_list = views.ProductViewSet.as_view({
    'get': 'list',
    'post': 'create',
    'put' : 'update'
})

urlpatterns = [
    url(r'^$', product_list, name='ProductViewSet'),
]